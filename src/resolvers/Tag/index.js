import { encodeTagOpaqueId } from "../../xforms/id.js";
import heroMediaUrl from "./heroMediaUrl.js";
import thumbnailMediaUrl from "./thumbnailMediaUrl.js";
import subTags from "./subTags.js";

export default {
  _id: (tag) => encodeTagOpaqueId(tag._id),
  _id_decoded: (tag) => tag._id,
  heroMediaUrl,
  thumbnailMediaUrl,
  subTagIds: (tag) => (tag.relatedTagIds || []).map(encodeTagOpaqueId),
  subTags
};
