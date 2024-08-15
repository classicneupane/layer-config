import { getApps, initializeApp } from 'firebase/app'

const config = {
    firebase: {
        dev: {
            apiKey: "AIzaSyAh6LQAHIvMO77wzy6W7ywZ6UJqjS5L5mM",
            authDomain: "bicc-soft-dev.firebaseapp.com",
            projectId: "bicc-soft-dev",
            storageBucket: "bicc-soft-dev.appspot.com",
            messagingSenderId: "866801600143",
            appId: "1:866801600143:web:0c075e46c8b5658c6592fa",
            measurementId: "G-88CRV0YH31"
        },
        main: {
            apiKey: "AIzaSyAh6LQAHIvMO77wzy6W7ywZ6UJqjS5L5mM",
            authDomain: "bicc-soft-dev.firebaseapp.com",
            projectId: "bicc-soft-dev",
            storageBucket: "bicc-soft-dev.appspot.com",
            messagingSenderId: "866801600143",
            appId: "1:866801600143:web:0c075e46c8b5658c6592fa",
            measurementId: "G-88CRV0YH31"
        }
    }
}

const firebaseConfig = () => {
    return config.firebase.dev;
}

export function init() {
    if (!getApps().length) {
        console.log(firebaseConfig().projectId)
        initializeApp(firebaseConfig())
    }
}


export default defineNuxtPlugin((app) => {
    init()
})
