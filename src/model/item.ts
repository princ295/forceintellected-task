import { itemdetails } from './itemdetails';

export class Model{

    document_no: string;
    document_date: Date;
    compeny: string;
    indent: string;
    deparment: string;
    charge: string;
    request: string;
    indent_tag: string;
    remarks: string;

    check: boolean;
    item: itemdetails[]
}