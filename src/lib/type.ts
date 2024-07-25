export type IntroduceCardType = {
  imageUrl: string;
  title: string;
  brief: string;
};

export type MenuCardType = {
  imageUrl: string;
  title: string;
  brief: string;
  openHours: [string, string];
};

export type RoomDetailType = {
  id: string;
  imageUrl: string[];
  title: string;
  description: string;
  area: string;
  bed: string;
  accommodate: string;
  price: number;
};

export type RoomData = string[];
