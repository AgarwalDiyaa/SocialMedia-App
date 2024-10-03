import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        height: 50,
        // minWidth: 200,
        width: "90%",
        margin: 12,
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 10,
        borderColor: 'gray',
      },
      // center aligned content
      center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      },
      loginButton: {
        backgroundColor: '#0095F6',
        padding: 10,
        borderRadius: 100,
        // width: 200,
        width: '90%',
        overflow: 'hidden',
        marginTop: 20,
      },
      loginText: {
        textAlign: 'center',
        color: 'white',
      },
});