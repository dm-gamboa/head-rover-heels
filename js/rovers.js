import { saveStatus } from './api/localStorage.js';
import { capitalizeWords } from './helpers/capitalizeWords.js';
import { debounce } from './helpers/debounce.js';
import { getRelativeDate } from './helpers/getRelativeDate.js';
import { getTemplate } from './helpers/getTemplate.js';
import { insertText } from './helpers/insertText.js';

const pathToCard = '../common/card.html';
const cardTemplate = await getTemplate(pathToCard);

export var rovers = {
    _all: [],
    _filter: '',

    set all(rovers) {
        this._all = rovers;
        this.displayRovers();
        this.renderFilterNums();
    },

    set filter(filter) {
        this._filter = filter;
        this.displayRovers();
    },

    get all() {
        return this._all;
    },

    get filter() {
        return this._filter;
    },

    displayRovers() {
        const toDisplay = this.filterRover(this._filter);
        toDisplay.length === 0 ? this.renderNoDisplay() : this.renderCards(toDisplay);
    },

    filterRover(filter) {
        return this._all.filter(rover => {
            switch (filter) {
                case 'liked':
                    return rover.liked;
                case 'disliked':
                    return rover.disliked;
                default:
                    return true;
            }
        });
    },

    dislikeRover(btn, rover) {
        btn.addEventListener('click', 
            debounce(() => {
                let updatedRover = rover;
                // rover cannot be both liked and disliked ...
                // ... so change liked to false if user is disliking rover
                updatedRover.liked = !updatedRover.disliked ? false : updatedRover.liked;
                updatedRover.disliked = !updatedRover.disliked; 

                const index = this._all.indexOf(rover);
                this._all[index] = updatedRover;
                this.displayRovers();
                this.renderFilterNums();
                saveStatus(this._all);
            }, 250)
        );
    },

    likeRover(btn, rover) {
        btn.addEventListener('click',
            debounce(() => {
                let updatedRover = rover;
                updatedRover.disliked = !updatedRover.liked ? false : updatedRover.disliked;
                updatedRover.liked = !updatedRover.liked; 

                const index = this._all.indexOf(rover);
                this._all[index] = updatedRover;
                this.displayRovers();
                this.renderFilterNums();
                saveStatus(this._all);
            }, 250)
        );
    },

    renderFilterNums() {
        let roverCount = {
            all: this._all.length,
            liked: 0,
            disliked: 0
        };
        
        for (const rover of this._all) {
            if (rover.liked) {
                roverCount.liked += 1;
            }

            if (rover.disliked) {
                roverCount.disliked += 1;
            }
        }
        
        for (const count in roverCount) {
                const num = document.querySelector(`[data-filter=${count}] .roverCount`);
                num.innerHTML = roverCount[count] > 0 ? `(${roverCount[count]})` : '';
        }
    },

    renderNoDisplay() {
        const roverList = document.querySelector('#roverList');
        roverList.innerHTML = '<div>Nothing to see here.</div>';
    },

    renderCards(rovers) {
        const roverList = document.querySelector('#roverList');
        roverList.innerHTML = '';

        rovers.forEach(rover => {
            const roverCard = document.importNode(cardTemplate.content, true);
            const formattedLanding = new Intl.DateTimeFormat('en-us', {dateStyle: 'medium'}).format(rover.landingDate);
            const formattedPhotos = new Intl.NumberFormat('en-us').format(rover.totalPhotos);
            
            insertText(roverCard, '.card__title--name', capitalizeWords(rover.name));
            insertText(roverCard, '.card__title--age', rover.age);
            insertText(roverCard, '.card__summary--item.status', rover.status);
            insertText(roverCard, '.card__summary--item.landing', formattedLanding);
            insertText(roverCard, '.card__main-content--blurb', `I've taken ${formattedPhotos} photos so far!`);
            insertText(roverCard, '.card__main-content--last-seen', `Last seen ${getRelativeDate(rover.lastSeen)}`);
        
            const roverImage = roverCard.querySelector('.card__image img');
            roverImage.src = `../assets/rovers/${rover.name}.jpg`;
            roverImage.alt = `Nasa's ${capitalizeWords(rover.name)} rover on Mars`;
            
            const dislikeBtn = roverCard.querySelector('.card__button--dislike');
            this.dislikeRover(dislikeBtn, rover);

            const likeBtn = roverCard.querySelector('.card__button--like');
            this.likeRover(likeBtn, rover);

            roverList.appendChild(roverCard);
        });
    }
}