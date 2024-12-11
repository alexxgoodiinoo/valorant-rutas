export interface ArmaSeleccionada {
    status: number;
    data:   Data;
}

export interface Data {
    uuid:            string;
    displayName:     string;
    category:        string;
    defaultSkinUuid: string;
    displayIcon:     string;
    killStreamIcon:  string;
    assetPath:       string;
    weaponStats:     WeaponStats;
    shopData:        ShopData;
    skins:           Skin[];
}

export interface ShopData {
    cost:              number;
    category:          string;
    shopOrderPriority: number;
    categoryText:      string;
    gridPosition:      GridPosition;
    canBeTrashed:      boolean;
    image:             null;
    newImage:          string;
    newImage2:         null;
    assetPath:         string;
}

export interface GridPosition {
    row:    number;
    column: number;
}

export interface Skin {
    uuid:            string;
    displayName:     string;
    themeUuid:       string;
    contentTierUuid: null | string;
    displayIcon:     null | string;
    wallpaper:       null | string;
    assetPath:       string;
    chromas:         Chroma[];
    levels:          Level[];
}

export interface Chroma {
    uuid:          string;
    displayName:   string;
    displayIcon:   null | string;
    fullRender:    string;
    swatch:        null | string;
    streamedVideo: null | string;
    assetPath:     string;
}

export interface Level {
    uuid:          string;
    displayName:   string;
    levelItem:     null | string;
    displayIcon:   null | string;
    streamedVideo: null | string;
    assetPath:     string;
}

export interface WeaponStats {
    fireRate:            number;
    magazineSize:        number;
    runSpeedMultiplier:  number;
    equipTimeSeconds:    number;
    reloadTimeSeconds:   number;
    firstBulletAccuracy: number;
    shotgunPelletCount:  number;
    wallPenetration:     string;
    feature:             null;
    fireMode:            null;
    altFireType:         string;
    adsStats:            AdsStats;
    altShotgunStats:     null;
    airBurstStats:       null;
    damageRanges:        DamageRange[];
}

export interface AdsStats {
    zoomMultiplier:      number;
    fireRate:            number;
    runSpeedMultiplier:  number;
    burstCount:          number;
    firstBulletAccuracy: number;
}

export interface DamageRange {
    rangeStartMeters: number;
    rangeEndMeters:   number;
    headDamage:       number;
    bodyDamage:       number;
    legDamage:        number;
}