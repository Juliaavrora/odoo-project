/** @odoo-module **/
console.log("✅ POS Cashback module loaded");

import { PosGlobalState } from "@point_of_sale/app/store/pos_global_state";

PosGlobalState.prototype._processData = async function (loadedData) {
    await this._super(loadedData);

    for (let partner of this.partners) {
        if (partner.cashback_rate !== undefined) {
            partner.loyalty_grant = partner.cashback_rate;
        }
    }
};
