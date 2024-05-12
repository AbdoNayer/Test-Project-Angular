export interface Products {
    id                  : string,
    image               : string,
    title               : string,
    category            : string,
    description         : string,
    price               : string
}

export interface Categories {
    id                  : string,
    image               : string,
    title               : string,
}

export interface Slider extends Categories {
    desc                : string,
}


