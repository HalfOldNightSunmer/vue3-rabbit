
import XtxImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const componentPlugin = {
    install(app) {
        app.component('XtxImageView', XtxImageView)
        app.component('XtxSku', XtxSku)
    }

}