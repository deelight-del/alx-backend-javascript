/* eslint-disable */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor.name !== 'Building') {
      if (this.hasOwnProperty('evacuationWarningMessage') === false) {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() { return this._sqft; }
}
