export interface CardInterface {
   id: number;
   firstName: string;
   lastName: string;
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
