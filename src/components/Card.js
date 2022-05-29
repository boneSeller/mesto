
export class Card {
  constructor ({  data, handleCardClick, handleCardDelete, handleLikeClick}, cardSelector, api, userId) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
    this._api = api;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    }

    _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards').cloneNode(true);
    return cardElement;
    }


    putLike() {
        const count = this._element.querySelector('.cards__like__counter');
        if (!this._likeButton.classList.contains('cards__like_active')) {
          this._api.putLike(this._id)
            .then((data) => {
              this._likeButton.classList.add('cards__like_active');
              count.textContent = data.likes.length;
            })
            .catch((err) => {
              console.log(err);
            })
        } else {
            this._api.deleteLike(this._id)
              .then((data) => {
                this._likeButton.classList.remove('cards__like_active');
                count.textContent = data.likes.length;
              })
              .catch((err) => {
                console.log(err);
              })
        }
      }

      deleteCard() {
        this._element.closest('.cards').remove();
      }



    _setEventListeners() {
        this._deleteButton = this._element.querySelector('.cards__trash');
        this._cardImage = this._element.querySelector('.cards__image');
        this._likeButton = this._element.querySelector('.cards__like');
        this._cardText = this._element.querySelector('.cards__text');
    
        this._likeButton.addEventListener('click', () => { this._handleLikeClick()});
    
        this._deleteButton.addEventListener('click', () => {
          this._handleCardDelete();
        });
    
        this._cardImage.addEventListener('click', () => {
          this._handleCardClick({name: this._name, link: this._link});
        });
      }

      generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._cardText.textContent = this._name;
        const cardImage = this._cardImage;
        cardImage.src = this._link;
        cardImage.alt = this._name;
        this._element.querySelector('.cards__like__counter').textContent = this._likes.length;
    
        if (!(this._ownerId === this._userId)) {
         this._deleteButton.classList.add('cards__trash');
        }
    
        if (this._likes.find((obj) => this._userId === obj._id)) {
          this._likeButton.classList.add('cards__like_active');
        }
        return this._element;
      }

}