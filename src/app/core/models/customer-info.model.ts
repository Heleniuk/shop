export class CustomerInfoModel {
    constructor(
        public name: string,
        public email: string,
        public address: string,
        public phones: string[]
    ) {}
}