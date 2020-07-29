import { decodeShopOpaqueId, decodeTagOpaqueId } from "../../xforms/id.js";

/**
 * Arguments passed by the client for a tags query
 * @typedef {ConnectionArgs} TagConnectionArgs - An object of all arguments that were sent by the client
 * @memberof Tag/GraphQL
 * @property {ConnectionArgs} args - An object of all arguments that were sent by the client. {@link ConnectionArgs|See default connection arguments}
 * @property {String} args._rId - Entity ID of tag from magento
 */

 /**
 * @name Query/tagsByEntityIds
 * @method
 * @memberof Tag/GraphQL
 * @summary Returns a tag for a shop, based on tag slug or ID
 * @param {Object} _ - unused
 * @param {Object} connectionArgs - arguments sent by the client {@link ConnectionArgs|See default connection arguments}
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object[]>} Promise that resolves with array of Tag objects
 */
export default async function tagsByEntityIds(_, connectionArgs, context) {
    const { _rIds } = connectionArgs;

    // TODO:: Need shop logic?

    console.log("_rIds resolver", _rIds);
  
    return context.queries.tagsByEntityIds(context, { ...connectionArgs, _rIds });
  }