import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textPrimary: {
    fontSize: 22,
    fontFamily: 'proxima-nova-regular',
    fontWeight: 'bold',
  },
  textPrimaryWoBold: {
    fontSize: 22,
    fontFamily: 'proxima-nova-regular',
  },
  textSecondary: {
    color: '#767676',
    fontSize: 14,
    fontFamily: 'proxima-nova-light',
  },
  textTertiary: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'proxima-nova-regular',
  },
  button1: {
    backgroundColor: '#F57E4A',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 12,
    // width: '100%',
  },
  button2: {
    backgroundColor: '#9D9D9D',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 12,
    // width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 19,
    fontFamily: 'proxima-nova-regular',
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
