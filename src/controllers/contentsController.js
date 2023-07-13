import {
  loadContents,
  reloadContents,
} from "../models/contents/contentsModel.js";
import {
  renderContents,
  reRenderContents,
} from "../views/contents/contentsView.js";

export const initContents = async (vsCurrency) => {
  const contents = await loadContents(vsCurrency);

  return renderContents(contents, vsCurrency);
};

export const initContentsReload = async (vsCurrency) => {
  const contents = await reloadContents(vsCurrency);

  return reRenderContents(contents, vsCurrency);
};
