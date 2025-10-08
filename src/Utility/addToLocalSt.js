import { toast } from "react-toastify";

const getStoreApp = () => {
    try {
        const data = localStorage.getItem("installed");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.log(err);
        return [];
    }
    };
    const addToStoreDb = (app) => {
    const storeAppData = getStoreApp();
    try {
        const isDuplicated = storeAppData.some((p) => p.id === app.id);
        if (isDuplicated) return;
        toast("✅App Installed");
        const updatedStoreApp = [...storeAppData, app];
        localStorage.setItem("installed", JSON.stringify(updatedStoreApp));
    } catch (err) {
        console.log(err);
    }
    };

    const removeFromInstalled = (id) => {
    const installed = getStoreApp();
    try {
        const updatedInstalledApp = installed.filter((a) => a.id !== id);
        localStorage.setItem("installed", JSON.stringify(updatedInstalledApp));
    } catch (err) {
        console.log(err);
    }
};
export { addToStoreDb, getStoreApp, removeFromInstalled };