/**
*
* Auto-generated model for table transactions
* Do not modify this class.
*
**/

import { Transaction as BaseInterface } from '../mysql.defines';
import MysqlTable, { PrimaryKeyType } from "@server/modules/mysql/table";

export const tableName = "transactions";
export const tablePrimaryKey = "id";

export interface TransactionInterface extends Partial<BaseInterface> {
}
export type TransactionField = keyof TransactionInterface;

export class TransactionTable extends MysqlTable {
  protected fields: TransactionField[] = ["created_at","deleted_at","id","status","updated_at"];  
  protected primaryKeyType: PrimaryKeyType = 'uuid';

  //public create(params: TransactionInterface): Promise<TransactionInterface | null> {
  //  return super.create(params)
  //}

  //public update(id: PrimaryKeyType, params: TransactionInterface) {
  //  return super.update(id, params)
  //}

  //public getByField(field: TransactionField, value: any, selectFields: TransactionField[] = []): Promise<TransactionInterface | null> {
  //  return super.selectByField(field, value, selectFields)
  //}

  //public getTransaction(id: PrimaryKeyType, selectFields: TransactionField[] = []): Promise<TransactionInterface | null> {
  //  return super.selectById(id, selectFields);
  //}

  //public createTransaction(status?: number | null): Promise<TransactionInterface | null> {
  //  return this.create({
  //    status
  //  });
  //}

  //public updateTransaction(id: uuid, status?: number | null) {
  //  return this.update(id, {
  //    status
  //  });
  //}
}

const TransactionModel = new TransactionTable(tableName, tablePrimaryKey);
export default TransactionModel;
