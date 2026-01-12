/**
*
* Auto-generated model for table blocked_ip_list
* Do not modify this class.
*
**/

import { BlockedIpList as BaseInterface } from '../mysql.defines';
import MysqlTable, { PrimaryKeyType } from "@server/modules/mysql/table";

export const tableName = "blocked_ip_list";
export const tablePrimaryKey = "id";

export interface BlockedIpListInterface extends Partial<BaseInterface> {
}
export type BlockedIpListField = keyof BlockedIpListInterface;

export class BlockedIpListTable extends MysqlTable {
  protected fields: BlockedIpListField[] = ["created_at","deleted_at","id","ip_address","updated_at"];  
  protected primaryKeyType: PrimaryKeyType = 'uuid';

  //public create(params: BlockedIpListInterface): Promise<BlockedIpListInterface | null> {
  //  return super.create(params)
  //}

  //public update(id: PrimaryKeyType, params: BlockedIpListInterface) {
  //  return super.update(id, params)
  //}

  //public getByField(field: BlockedIpListField, value: any, selectFields: BlockedIpListField[] = []): Promise<BlockedIpListInterface | null> {
  //  return super.selectByField(field, value, selectFields)
  //}

  //public getBlockedIpList(id: PrimaryKeyType, selectFields: BlockedIpListField[] = []): Promise<BlockedIpListInterface | null> {
  //  return super.selectById(id, selectFields);
  //}

  //public createBlockedIpList(ip_address?: string | null): Promise<BlockedIpListInterface | null> {
  //  return this.create({
  //    ip_address
  //  });
  //}

  //public updateBlockedIpList(id: uuid, ip_address?: string | null) {
  //  return this.update(id, {
  //    ip_address
  //  });
  //}
}

const BlockedIpListModel = new BlockedIpListTable(tableName, tablePrimaryKey);
export default BlockedIpListModel;
