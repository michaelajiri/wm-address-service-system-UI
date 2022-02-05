export class Residence {
    constructor(
        public id: number,
        public stateId: number,
        public cityId: number,
        public lgaId: number,
        public townId: number,
        public lcdaId: number,
        public villageId: number,
        public streetId: number,
        public landMark: string,
        public houseNumber: string,
        public roomNumber: string,
        public dateCreated: Date,
        public lastUpdated: Date
    ) { }
}