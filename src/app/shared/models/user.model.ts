export interface userModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: userAddress,
    phone: string,
    website: string,
    company: userCompany
}

export interface userAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: userAddressGeo
}

export interface userCompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface userAddressGeo {
    lat: number,
    lng: number
}