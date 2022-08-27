import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Pressable,
  NativeSyntheticEvent,
  KeyboardAvoidingView,
} from "react-native";
import React, { ReactElement, useState } from "react";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";

type CustomModalProps = {
  show: boolean | undefined;
  body: ReactElement;
  headerText?: string;
  buttonText?: string;
  animationType?: "none" | "fade" | "slide" | undefined;
  onHide: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  onSubmit?: ((event: NativeSyntheticEvent<any>) => void) | undefined;
};

const CustomModal: React.FC<CustomModalProps> = ({
  show,
  body,
  headerText,
  buttonText,
  animationType,
  onHide,
  onSubmit,
}: CustomModalProps) => {
  return (
    <Modal
      animationType={animationType || "slide"}
      transparent={true}
      visible={show}
      onRequestClose={onHide}
    >
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {headerText && (
              <View style={styles.header}>
                <CustomText style={styles.headerText} weight={600}>
                  {headerText}
                </CustomText>
              </View>
            )}
            <View style={styles.body}>{body}</View>
            <View style={styles.footer}>
              <CustomButton
                text={"Close"}
                onPress={onHide}
                variant="secondary"
              />
              <View style={{ width: 5 }} />
              <CustomButton
                text={buttonText || "Submit"}
                onPress={onSubmit}
                variant="primary"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  header: {
    marginVertical: 5,
  },
  headerText: {
    fontSize: 24,
  },
  body: { marginVertical: 5 },
  footer: {
    flexDirection: "row",
    marginTop: 5,
    height: 50,
  },
  buttonContainer: {
    margin: 1,
  },
});
