/// <reference path="helpers.ts"/>

module Todos{
    export class Todo{
        public ID :number;
        public text :string;
        public status :TodoStatus;
        constructor(ID :number,text :string,status :TodoStatus){
            this.ID = ID;
            this.text = text;
            this.status = status;
        }
    }
}