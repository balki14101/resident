import React from 'react';
import {View, Text, Image} from 'react-native';
import appLogo from '../assets/images/appLogo.png';

function HomeTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Social
      </Text>
    </View>
  );
}
function ProfileTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Culinary
      </Text>
    </View>
  );
}

function ShoppingTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Shopping
      </Text>
    </View>
  );
}
function NotificationTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Notifications
      </Text>
    </View>
  );
}

function AdvisoryTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Advisory
      </Text>
    </View>
  );
}

function FeedTitleQA() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Article
      </Text>
    </View>
  );
}

function FeedTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Feed
      </Text>
    </View>
  );
}

function StockInfoTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Stock Info
      </Text>
    </View>
  );
}
function SearchTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Search Results
      </Text>
    </View>
  );
}
function TechTitle(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        {props.title}
      </Text>
    </View>
  );
}
function BankingTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Banking Sector
      </Text>
    </View>
  );
}
function PeersTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Peers
      </Text>
    </View>
  );
}
function ComplianceTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Shariah Compliance
      </Text>
    </View>
  );
}
function TermsTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Terms of Use
      </Text>
    </View>
  );
}
function QAForumTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        Q{'&'}A Forum
      </Text>
    </View>
  );
}
function SubcriptionTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 30}} />
      <Text
        style={{
          color: '#707070',
          fontSize: 18,
          fontFamily: 'poppins_regular',
          paddingLeft: 12,
        }}>
        My Subcriptions
      </Text>
    </View>
  );
}

function CalendarTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Calendar
      </Text>
    </View>
  );
}
function DocumentsTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 25,
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Documents
      </Text>
    </View>
  );
}
function EventsTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 25,
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Events
      </Text>
    </View>
  );
}
function PaymentsTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 25,
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Payments
      </Text>
    </View>
  );
}
function VisitationsTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 25,
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Visitations
      </Text>
    </View>
  );
}
function BookVisitationsTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 25,
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Book Visitations
      </Text>
    </View>
  );
}
function VisitationDetailsTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 25,
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Details
      </Text>
    </View>
  );
}

function PaymentMethodTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 25,
      }}>
      <Image source={appLogo} style={{width: 30, height: 26}} />
      <Text
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontFamily: 'proxima-nova-regular',
          paddingLeft: 10,
        }}>
        Add Payment Method
      </Text>
    </View>
  );
}

export {
  HomeTitle,
  ProfileTitle,
  ShoppingTitle,
  CalendarTitle,
  NotificationTitle,
  AdvisoryTitle,
  FeedTitle,
  FeedTitleQA,
  StockInfoTitle,
  SearchTitle,
  ComplianceTitle,
  TermsTitle,
  TechTitle,
  QAForumTitle,
  SubcriptionTitle,
  BankingTitle,
  PeersTitle,
  DocumentsTitle,
  PaymentsTitle,
  PaymentMethodTitle,
  EventsTitle,
  VisitationsTitle,
  BookVisitationsTitle,
  VisitationDetailsTitle,
};
