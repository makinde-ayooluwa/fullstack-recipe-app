export const authStyles = {
    login: {
        container: {
            flex: 1,
        }
    },
    register: {
        container: {
            flex: 1,
            justifyContent: "center",
        },
        socialRegister: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 40
        },
        socialIcon: {
            borderWidth: 1,
            padding: 10,
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: 10
        },
        loginCard: {
            borderRadius: 30,
            alignSelf: "center",
            padding: 20
        },
        inputGroup: {
            alignItems: "start",
            marginVertical: 10,
        },
        inputLabel: {
            marginVertical: 0,
            fontWeight: "bold",
            alignSelf: "start"
        },
        input: {
            alignSelf: "center"
        },
        submit: {
            backgroundColor: "#005712ff",
            alignSelf: "center",
            padding: 15,
            borderRadius: 30,
        }
    },
}