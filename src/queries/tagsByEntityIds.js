import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name tagsByEntityIds
 * @method
 * @memberof Catalog/NoMeteorQueries
 * @summary query the Tags collection and return a tag by rId which is magento's catefory ID
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input input of tag query
 * @param {String} input._rId - entityId of tag from magento
 * @returns {Object} - A Tag document if one was found
 */
export default async function tagsByEntityIds(context, input) {
    const { collections } = context;
    const { Tags } = collections;
    const { _rIds } = input;

    var obj = [];
    await Tags.find({ _rId: { $in: _rIds } })
    .forEach((doc) => {
        obj.push(doc);
    });

    const output = {
        nodes: obj
    }

    //   TODO:: Check if permission logic needs to be copied from tag.js query

    return output;
}
