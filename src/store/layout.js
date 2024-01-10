import {defineStore} from "pinia";

export const useLayoutStore = defineStore("layout", {
    state: () => ({
        layoutType: "LayoutClassic",
        menuFold: false,
        isZh: true,
        isGray: false,
        isTransparent: false,
        isNoBreadcrumb: false,
        isNavigating: false,
        wrapperType: "",
        menuFilterDialogVisible: false,
        colorPrimaryBg: "#515a6e", // parimary
        colorPrimaryLight2: "", // parimary hover
        colorPrimaryLight9: "", // default hover
        colorPrimaryLight7: "", // default hover
        colorPrimaryLight4: "", // el-button link primary hover
        colorPrimaryLight5: "", // parimary disabled
        colorPrimaryDark2: "", // parimary active
    }),
    actions: {
        changeLayoutType(data) {
            this.layoutType = data;
            this.menuFold = false;
        },
        resetColors() {
            this.colorPrimaryBg = "#515a6e";
            this.colorPrimaryLight2 = "";
            this.colorPrimaryDark2 = "";
            this.colorPrimaryLight9 = "";
            this.colorPrimaryLight7 = "";
            this.colorPrimaryLight4 = "";
            this.colorPrimaryLight5 = "";
        },
    },
    persist: {
        paths: [
            "layoutType",
            "menuFold",
            "isZh",
            "colorPrimaryBg",
            "colorPrimaryLight2",
            "colorPrimaryDark2",
            "colorPrimaryLight9",
            "colorPrimaryLight7",
            "colorPrimaryLight4",
            "colorPrimaryLight5",
        ],
    },
});
