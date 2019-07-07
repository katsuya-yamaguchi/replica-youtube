import { addItems, hasMore } from "../../actions/actions";
import { infinitScroll, initialState, loadItems } from "../../reducers/reducer";

describe("infinitScroll", () => {
  it("should add a new item.", () => {
    const data: object[] = [
      {
        account: "Shayne Schinner",
        created_at: "2019-06-19T14:02:56.488Z",
        id: 1,
        num_of_views: 0,
        title: "Stringtough",
        updated_at: "2019-06-19T14:02:56.488Z",
        url: "/dolor_eligendi"
      }
    ];

    const state = infinitScroll(initialState.tracks, addItems(data));
    expect(state).toMatchObject([data]);
  });
});

describe("loadItems", () => {
  it("return value is true.", () => {
    const state = loadItems(initialState.flag, hasMore(true));
    expect(state).toEqual(true);
  });

  it("return value is false.", () => {
    const state = loadItems(initialState.flag, hasMore(false));
    expect(state).toEqual(false);
  });
});
