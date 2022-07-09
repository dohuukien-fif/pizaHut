export interface WardsProps {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
}
export interface DistrictsProps {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
  wards: WardsProps[];
}
export interface CityProps {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  phone_code: number;
  districts: DistrictsProps[];
}
