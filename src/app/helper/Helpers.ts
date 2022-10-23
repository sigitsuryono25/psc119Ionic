import { LoadingController } from "@ionic/angular";

export class Helpers {
    loading : Promise<HTMLIonLoadingElement>
    constructor (loadingController: LoadingController){
        this.loading = loadingController.create({
            message: "Memuat...",
            spinner: "circles"
        });
    }
    async showLoading() {
       (await this.loading).present()
    }

    async dismissLoading(){
        (await this.loading).dismiss();
    }
}