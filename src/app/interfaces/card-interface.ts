export interface CardInterface {
   id: number;
   name: string;
   company: string;
   set: string;
   year: number;
   sport: string;
   team: string;
   rookie: boolean;
   auto: boolean;
   relic: boolean;
   relicType?: string;
   numbered: boolean;
   numberedTo?: number;
   image?: string;
}
