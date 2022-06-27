import * as React from "react";
import { StyleSheet, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: Colors.lighter_purple,
  stepStrokeWidth: 2,
  separatorStrokeFinishedWidth: 3,
  stepStrokeFinishedColor: Colors.lighter_purple,
  stepStrokeUnFinishedColor: Colors.lighter_purple,
  separatorFinishedColor: Colors.lighter_purple,
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: Colors.lighter_purple,
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: Colors.lighter_purple,
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: Colors.lighter_purple,
};

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
  const iconConfig = {
    name: "feed",
    color: stepStatus === "finished" ? "#ffffff" : Colors.lighter_purple,
    size: 15,
  };
  switch (position) {
    case 0: {
      iconConfig.name = "shopping-cart";
      break;
    }
    case 1: {
      iconConfig.name = "assessment";
      break;
    }
    case 2: {
      iconConfig.name = "location-on";
      break;
    }
    case 3: {
      iconConfig.name = "payment";
      break;
    }

    default: {
      break;
    }
  }
  return iconConfig;
};

const Steps = (props) => {
  const status = props.position;
  const [currentPage, setCurrentPage] = React.useState(status);
  const renderStepIndicator = (params) => (
    <MaterialIcons {...getStepIndicatorIconConfig(params)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={secondIndicatorStyles}
          stepCount={4}
          currentPosition={currentPage}
          renderStepIndicator={renderStepIndicator}
          labels={["Unconfimred", "Confirm", "Delivering", "Receive"]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  stepIndicator: {
    marginTop: 20,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: Colors.lighter_purple,
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#4aae4f",
  },
});

export default Steps;
