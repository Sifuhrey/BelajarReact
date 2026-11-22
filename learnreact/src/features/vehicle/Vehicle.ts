export type Vehicle = {
  identifier: string;
  country: string;
  images: {
    image: string;
    techtree: string;
  };
  realistic_br: number;
  is_premium: boolean;
  on_marketplace: boolean;
};