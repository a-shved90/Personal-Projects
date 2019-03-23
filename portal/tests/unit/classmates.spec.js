import { shallowMount } from "@vue/test-utils";
import Classmates from "@/views/Classmates.vue";

describe("Classmates.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Classmates, {
      data() {
        return {
          classmates: [
            {
              id: 100002157118009,
              name: "Alexander Shved",
              profileImg: "shved",
              coverImg: "shvedCover",
              location: "Bristol",
              country: "United Kingdom",
              birthday: "1990-04-15",
              social: {
                twitter: "https://twitter.com/Shved_90",
                vkontakte: "https://vk.com/a.shved90"
              }
            }
          ],
          search: ""
        };
      }
    });
    expect(wrapper)
      .getElementsByClassName("classmate")
      .toMatch(1);
  });
});
