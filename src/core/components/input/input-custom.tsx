import { TextInput, View, Text } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import styles from './styles';
import useInputCustom from '../hooks/input-custom.hook';
import { COLORS } from '../../theme/theme';

export const InputCustom = () => {
  const { value, setValue, isFocused, setIsFocused } = useInputCustom();

  return (
    <View style={[isFocused && styles.outerContainer]}>
      <View style={[styles.container, isFocused && styles.containerFocused]}>
        <View style={[styles.contentInput, !isFocused && {width: '100%'}]}>
          {(isFocused || value.length > 0) && (
            <Text style={styles.label}>Correo electrónico</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Escribe tu correo electrónico"
            placeholderTextColor={COLORS.placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChangeText={setValue}
            keyboardType='email-address'
          />
        </View>
        {isFocused && (
          <BaseButton style={styles.contentIcon} onPress={() => setValue('')}>
            <Text style={styles.icon}>X</Text>
          </BaseButton>
        )}
      </View>
    </View>
  );
};
