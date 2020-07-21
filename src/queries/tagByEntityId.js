import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name tagByEntityId
 * @method
 * @memberof Catalog/NoMeteorQueries
 * @summary query the Tags collection and return a tag by rId which is magento's catefory ID
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input input of tag query
 * @param {String} input._rId - entityId of tag from magento
 * @returns {Object} - A Tag document if one was found
 */
export default async function tagByEntityId(context, input) {
  const { collections } = context;
  const { Tags } = collections;
  const { _rId } = input;

  const foundTag = await Tags.findOne({ _rId });

  if (!foundTag) {
    throw new ReactionError("not-found", "Tag not found");
  }

//   TODO:: Check if permission logic needs to be copied from tag.js query

  return foundTag;
}
