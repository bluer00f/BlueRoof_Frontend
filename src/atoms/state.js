import { atom } from "recoil"
export const buildingArrState = atom({
    key: 'buildingArrState',
    default:[{
        buildingAddress: '',
        buildingArea: 0,
        buildingDate: '',
        buildingPrice: 0,
        buildingType: '',
        buildingZipcode: ''
      }]
})