import {
    client,
    modal,
    schema,
    SchemaTypes
} from '../../beapi_modules/BEAPI_CORE_SCRIPT.js'

// Create Schema For Database1.
const database1Schema = schema({
    redeem: SchemaTypes.Map,
    redeemCode: SchemaTypes.Array,
    discordCode: SchemaTypes.Array,
    packCode: SchemaTypes.Array,
    vipCode: SchemaTypes.Array
});
// Create Modal Named 'database1'.
const database1 = modal('database1', database1Schema);
// Get All Stats Doc1uments And Select First One.
// AND can be used to edit database1
// If No Doc1ument, Create One And Assign It To statsDoc1ument.
if (!doc1) {
    database1.write({
        redeem: new Map(),
        redeemCode: [],
        discordCode: [],
        packCode: [],
        vipCode: [],
    });
}
export var doc1 = database1.findAll({})[0];

const array1 = [];

const array2 = [];

const array3 = [];

const array4 = [];

for (var code of array1) {
    doc1.redeemCode.push(code);
};

for (var dis of array2) {
    doc1.discordCode.push(dis);
}

for (var pack of array3) {
    doc1.packCode.push(pack);
}

for (var vipP of array4) {
    doc1.vipCode.push(vipP);
}
