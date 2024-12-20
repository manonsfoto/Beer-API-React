export interface IBeer {
  image_url: string;
  _id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  attenuation_level: number;
  brewers_tips: string;
  contributed_by: ContributedBy;
  expireAt: Date;
  __v: number;
}

export enum ContributedBy {
  AliSkinnerAliSkinner = "Ali Skinner <AliSkinner>",
  SamMasonSamjbmason = "Sam Mason <samjbmason>",
}
