import { Injectable } from '@angular/core';
//
export interface arrOption {
  OptVal: number;
  OptTxt: string;
  routeTxt: string;
  ParentId: number;
  ArrId: number;
}
@Injectable({
  providedIn: 'root',
})
export class ManArrService {
  arrList4Approval: any[] = [];
  constructor() {}
  arrOption: arrOption[] = [
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 0,
      ArrId: 1,
    },
    {
      OptVal: 1,
      OptTxt: 'Casual',
      routeTxt: '',
      ParentId: 0,
      ArrId: 1,
    },
    {
      OptVal: 2,
      OptTxt: 'Part Time',
      routeTxt: '',
      ParentId: 0,
      ArrId: 1,
    },
    {
      OptVal: 3,
      OptTxt: 'Full Time',
      routeTxt: '',
      ParentId: 0,
      ArrId: 1,
    },
    //
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 0,
      ArrId: 2,
    },
    {
      OptVal: 1,
      OptTxt: 'Admin Staff',
      routeTxt: '',
      ParentId: 0,
      ArrId: 2,
    },
    {
      OptVal: 2,
      OptTxt: 'Security Guard',
      routeTxt: '',
      ParentId: 0,
      ArrId: 2,
    },
    {
      OptVal: 3,
      OptTxt: 'Cleaning Staff',
      routeTxt: '',
      ParentId: 0,
      ArrId: 2,
    },
    //
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 0,
      ArrId: 3,
    },
    {
      OptVal: 1,
      OptTxt: 'Female',
      routeTxt: '',
      ParentId: 0,
      ArrId: 3,
    },
    {
      OptVal: 2,
      OptTxt: 'Male',
      routeTxt: '',
      ParentId: 0,
      ArrId: 3,
    },
    {
      OptVal: 3,
      OptTxt: 'NA',
      routeTxt: '',
      ParentId: 0,
      ArrId: 3,
    },
    //
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 0,
      ArrId: 4,
    },
    {
      OptVal: 1,
      OptTxt: 'Citizen of AU/NZ',
      routeTxt: '',
      ParentId: 0,
      ArrId: 4,
    },
    {
      OptVal: 2,
      OptTxt: 'Permanent Resident AU',
      routeTxt: '',
      ParentId: 0,
      ArrId: 4,
    },
    {
      OptVal: 3,
      OptTxt: 'Temporary Resident',
      routeTxt: '',
      ParentId: 0,
      ArrId: 4,
    },
    {
      OptVal: 4,
      OptTxt: 'Work | Protection Visa',
      routeTxt: '',
      ParentId: 0,
      ArrId: 4,
    },
    {
      OptVal: 5,
      OptTxt: 'Student Visa',
      routeTxt: '',
      ParentId: 0,
      ArrId: 4,
    },
    //
    // {
    //   OptVal: 1,
    //   OptTxt: 'Home',
    //   routeTxt: '/home',
    //   ParentId: 0,
    //   ArrId: 5,
    // },
    {
      OptVal: 1,
      OptTxt: 'Roster',
      routeTxt: '/roster',
      ParentId: 0,
      ArrId: 5,
    },
    {
      OptVal: 2,
      OptTxt: 'Compliance',
      routeTxt: '/compliances',
      ParentId: 0,
      ArrId: 5,
    },
    {
      OptVal: 3,
      OptTxt: 'Timesheet',
      routeTxt: '/time-sheet',
      ParentId: 0,
      ArrId: 5,
    },
    {
      OptVal: 4,
      OptTxt: 'Logout',
      routeTxt: '',
      ParentId: 0,
      ArrId: 5,
    },
    //
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 0,
      ArrId: 6,
    },
    {
      OptVal: 1,
      OptTxt: 'Certificate',
      routeTxt: '',
      ParentId: 0,
      ArrId: 6,
    },
    {
      OptVal: 2,
      OptTxt: 'License',
      routeTxt: '',
      ParentId: 0,
      ArrId: 6,
    },
    {
      OptVal: 3,
      OptTxt: 'Work Right Ref',
      routeTxt: '',
      ParentId: 0,
      ArrId: 6,
    },
    {
      OptVal: 4,
      OptTxt: 'Induction',
      routeTxt: '',
      ParentId: 0,
      ArrId: 6,
    },
    //==== With Parent Id
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 1,
      ArrId: 7,
    },
    {
      OptVal: 1,
      OptTxt: 'Security Op II',
      routeTxt: '',
      ParentId: 1,
      ArrId: 7,
    },
    {
      OptVal: 2,
      OptTxt: 'First Aid',
      routeTxt: '',
      ParentId: 1,
      ArrId: 7,
    },
    {
      OptVal: 3,
      OptTxt: 'RSA',
      routeTxt: '',
      ParentId: 1,
      ArrId: 7,
    },
    {
      OptVal: 4,
      OptTxt: 'Infaction Control',
      routeTxt: '',
      ParentId: 0,
      ArrId: 7,
    },
    // ========= License => Child
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 2,
      ArrId: 7,
    },
    {
      OptVal: 1,
      OptTxt: 'Security',
      routeTxt: '',
      ParentId: 2,
      ArrId: 7,
    },
    {
      OptVal: 2,
      OptTxt: 'Corwd Control',
      routeTxt: '',
      ParentId: 2,
      ArrId: 7,
    },
    {
      OptVal: 3,
      OptTxt: 'WWVP',
      routeTxt: '',
      ParentId: 2,
      ArrId: 7,
    },
    {
      OptVal: 4,
      OptTxt: 'Driving',
      routeTxt: '',
      ParentId: 2,
      ArrId: 7,
    },
    // ========= Work Right => Child
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 3,
      ArrId: 7,
    },
    {
      OptVal: 1,
      OptTxt: 'Visa',
      routeTxt: '',
      ParentId: 3,
      ArrId: 7,
    },
    {
      OptVal: 2,
      OptTxt: 'Passport',
      routeTxt: '',
      ParentId: 3,
      ArrId: 7,
    },
    // ========= Induction => Child
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 4,
      ArrId: 7,
    },
    {
      OptVal: 1,
      OptTxt: 'Myer',
      routeTxt: '',
      ParentId: 4,
      ArrId: 7,
    },
    {
      OptVal: 2,
      OptTxt: 'Woolworths',
      routeTxt: '',
      ParentId: 4,
      ArrId: 7,
    },
    {
      OptVal: 3,
      OptTxt: 'Synergy',
      routeTxt: '',
      ParentId: 4,
      ArrId: 7,
    },
    {
      OptVal: 4,
      OptTxt: 'Argyle',
      routeTxt: '',
      ParentId: 4,
      ArrId: 7,
    },
    {
      OptVal: 5,
      OptTxt: 'Not in list',
      routeTxt: '',
      ParentId: 4,
      ArrId: 7,
    },
    // ========= State | Terr
    {
      OptVal: 0,
      OptTxt: '-- Select --',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 1,
      OptTxt: 'QLD',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 2,
      OptTxt: 'NSW',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 3,
      OptTxt: 'ACT',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 4,
      OptTxt: 'VIC',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 5,
      OptTxt: 'TAS',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 6,
      OptTxt: 'SA',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 7,
      OptTxt: 'WA',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
    {
      OptVal: 8,
      OptTxt: 'NT',
      routeTxt: '',
      ParentId: 0,
      ArrId: 8,
    },
  ];
  //
  return_arr_list(arrId: number) {
    return this.arrOption.filter((m) => m.ArrId == arrId);
  }

  // return_lookup_from_arr(arrId: number, parentId: number, optVal: number) {
  //   let index = this.arrOption.findIndex(
  //     (p: any) => p.ArrId == arrId,
  //     (p: any) => p.ParentId == parentId,
  //     (p: any) => p.OptVal == optVal
  //   );
  //   console.log('OptTxt @manArr :', this.arrOption[index].OptTxt);
  //   return this.arrOption[index].OptTxt;
  // }
}
