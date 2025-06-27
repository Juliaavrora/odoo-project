/** @odoo-module **/

import { PosGlobalState } from "@point_of_sale/app/store/pos_global_state";

PosGlobalState.prototype._processData = async function (loadedData) {
    await this._super(loadedData);

    for (let partner of this.partners) {
        // если есть поле cashback_rate, сохраняем его
        if (partner.cashback_rate !== undefined) {
            partner.loyalty_grant = partner.cashback_rate;
        }
    }
};
