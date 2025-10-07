import { Platform, StyleSheet } from "react-native";
import { scaleSize } from "../../theme/mixins";
import { COLORS } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '100%',
    height: scaleSize(60),
    borderRadius: scaleSize(15),
    paddingLeft: scaleSize(20),
    paddingRight: scaleSize(18),
  },
  outerContainer: {
    borderWidth: scaleSize(3.5),
    borderColor: COLORS.quaternary,
    borderRadius: scaleSize(18),
    backgroundColor: COLORS.quaternary,
    width: '100%',
  },
  containerFocused: {
    borderWidth: scaleSize(1.5),
    borderColor: COLORS.focus,
  },
  contentInput: {
    flexDirection: 'column',
    gap: scaleSize(5),
    width: '80%',
  },
  label: {
    fontSize: scaleSize(10),
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  input : {
    fontSize: Platform.OS === 'ios' ? scaleSize(18) : scaleSize(16),
    height: Platform.OS === 'ios' ? scaleSize(22) : scaleSize(36),
    color: COLORS.tertiary,
    width: '100%',
    paddingHorizontal: 0
  },
  contentIcon: {
    width: scaleSize(25),
    height: scaleSize(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(25),
    backgroundColor: COLORS.quinary,
  },
  icon: {
    fontSize: scaleSize(12),
    color: COLORS.tertiary,
  },
});

export default styles;