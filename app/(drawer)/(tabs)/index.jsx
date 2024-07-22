import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import PagerView from "react-native-pager-view";
import { primaryColor } from "../../../constants";
import { useRef, useState } from "react";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

export default function Page() {
  const [display, setDisplay] = useState(0);
  const pagerViewRef = useRef(null);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={styles.title}>Latest</Text>
      </View>

      <View style={styles.latestContainer}>
        <PagerView
          style={styles.pagerView}
          ref={pagerViewRef}
          initialPage={0}
          onPageSelected={(e) => setDisplay(e.nativeEvent.position)}
        >
          <View style={styles.page} key="1">
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#666",
                  }}
                >
                  Pens
                </Text>
                <Text
                  style={{
                    color: "orange",
                    padding: 10,
                  }}
                >
                  Pending
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 15,
                }}
              >
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="location-pin"
                      color={primaryColor}
                      size={14}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#ccc",
                      }}
                    >
                      From
                    </Text>
                  </View>
                  <Text>Mombasa, Nairobi</Text>
                </View>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="location-pin" color="red" size={14} />
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#666",
                      }}
                    >
                      To
                    </Text>
                  </View>
                  <Text>Kampal, Uganda</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.page} key="2">
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#666",
                  }}
                >
                  Pens
                </Text>
                <Text
                  style={{
                    color: primaryColor,
                    padding: 10,
                  }}
                >
                  Delivered
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 15,
                }}
              >
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="location-pin"
                      color={primaryColor}
                      size={14}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#ccc",
                      }}
                    >
                      From
                    </Text>
                  </View>
                  <Text>Mombasa, Nairobi</Text>
                </View>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="location-pin" color="red" size={14} />
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#666",
                      }}
                    >
                      To
                    </Text>
                  </View>
                  <Text>Kampal, Uganda</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.page} key="3">
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#666",
                  }}
                >
                  Pens
                </Text>
                <Text
                  style={{
                    color: "red",
                    padding: 10,
                  }}
                >
                  Rejected
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 15,
                }}
              >
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="location-pin"
                      color={primaryColor}
                      size={14}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#ccc",
                      }}
                    >
                      From
                    </Text>
                  </View>
                  <Text>Mombasa, Nairobi</Text>
                </View>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="location-pin" color="red" size={14} />
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#666",
                      }}
                    >
                      To
                    </Text>
                  </View>
                  <Text>Kampal, Uganda</Text>
                </View>
              </View>
            </View>
          </View>
        </PagerView>
      </View>
      <View style={styles.indicatorContainer}>
        {[0, 1, 2].map((index) => (
          <Pressable
            key={index}
            style={[
              styles.indicator,
              display === index ? { backgroundColor: primaryColor } : null,
            ]}
            onPress={() => {
              pagerViewRef.current?.setPage(index);
            }}
          />
        ))}
      </View>

      <View style={styles.contentBox}>
        <View>
          <Text style={styles.subTitle}>What do you want to do?</Text>
        </View>
        <View style={styles.contentAction}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-start",
              backgroundColor: "#fff",
              padding: 20,
              elevation: 2,
              borderRadius: 10,
            }}
            onPress={() => {
              router.push("/quote");
            }}
          >
            <Feather name="truck" size={48} color="#ccc" />
            <Text
              style={{
                color: primaryColor,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Get Quote
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-start",
              backgroundColor: "#fff",
              padding: 20,
              elevation: 2,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            onPress={() => {
              router.push("/airport");
            }}
          >
            <Entypo name="aircraft" size={48} color="#ccc" />
            <Text
              style={{
                color: primaryColor,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Airport
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-start",
              backgroundColor: "#fff",
              padding: 20,
              elevation: 2,
              borderRadius: 10,
            }}
            onPress={() => {
              router.push("/(topTabs)");
            }}
          >
            <MaterialIcons name="local-gas-station" size={48} color="#ccc" />
            <Text
              style={{
                color: primaryColor,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Fuel prices
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentBox}>
        <View>
          <Text style={styles.subTitle}>Ridelink Spotlight</Text>
        </View>
        <View style={styles.content}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa
            quibusdam ducimus! Facilis, pariatur animi! Quod provident officia
            laborum vel.
          </Text>
        </View>
      </View>

      <StatusBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  latestContainer: {
    height: height / 4, // or any other fixed height
    margin: 10,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    backgroundColor: "#fff",
  },
  contentBox: {
    height: height / 4, // Adjust height as needed
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  content: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
    backgroundColor: "#fff",
  },
  contentAction: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "#ccc",
  },
});
