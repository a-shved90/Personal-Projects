import { shallowMount } from "@vue/test-utils";
import ClassmateItem from "@/components/ClassmateItem.vue";

describe("ClassmateItem.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(ClassmateItem, {
      propsData: {
        classmate: [
          {
            id: 100002157118009,
            name: "Alexander Shved",
            location: "Bristol",
            country: "United Kingdom",
            birthday: "1990-04-15",
            social: {
              twitter: "https://twitter.com/Shved_90",
              vkontakte: "https://vk.com/a.shved90"
            }
          }
        ]
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
