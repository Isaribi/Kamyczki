import { Alert } from 'react-native';

export function ErrorHandler(props) {
  const { code, message } = props;
  return Alert.alert(code, message);
}
