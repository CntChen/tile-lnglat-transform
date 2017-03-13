/*
 * Created by CntChen 2017.03.09
 * 参考资料： https://msdn.microsoft.com/en-us/library/bb259689.aspx
 * 适用地图： bing 地图 
*/

import TransformClassSlippy from './transform-class-slippy';

class TransformClassBing extends TransformClassSlippy {
  constructor(levelRange_max, LevelRange_min) {
    super(levelRange_max, LevelRange_min);
  }
  
  lnglatToQuadkey(tileX, tileY, level) {
    let tileX_binary = tileX.toString(2);
    let tileY_binary = tileY.toString(2); 

    tileX_binary = '0'.repeat(level - tileX_binary.length) + tileX_binary; 
    tileY_binary = '0'.repeat(level - tileY_binary.length) + tileY_binary; 

    let key_binary = '';
    for(let index = 0; index < level; index++) {
      key_binary = key_binary + tileY_binary[index] + tileX_binary[index];
    }

    key_binary = key_binary.replace(/^0*/, '');
    const key_decimal = Number.parseInt(key_binary, 2);
    const quadkey = key_decimal.toString(4);

    return quadkey;
  }
  
  quadkeyToLnglat(quadkey) {
    const level = quadkey.length;
    const key_decimal = Number.parseInt(quadkey, 4);
    let key_binary = key_decimal.toString(2);
    if(key_binary.length % 2 != 0){
      key_binary = '0' + key_binary;
    }

    let tileY_binary = '';
    let tileX_binary = '';
    for(let index = 0; index < key_binary.length; index++) {
      if(index % 2 === 0){
        tileY_binary = tileY_binary + key_binary[index];
      } else {
        tileX_binary = tileX_binary + key_binary[index];
      }
    }

    const tileY = Number.parseInt(tileY_binary, 2);
    const tileX = Number.parseInt(tileX_binary, 2);

    return {
      tileX,
      tileY,
      level
    };
  }
}

export default TransformClassBing;