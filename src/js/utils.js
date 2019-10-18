export default class Utils {
    /**
     * Implements dichotomic search. Given a sorted array returns the position
     * in the array where the given element is located. If the given element is
     * not on the array returns the position where it should be located.
     *
     * Cost: O(log(n)) (n -> number of elements on the array)
     *
     * Note: I choose to implement a recursive version because it is more
     * intuitive to read. But a loop version would run much faster:
     * https://jsperf.com/fibonacci-recursive-or-iterative/4
     *
     * @param {Array} arr An array of elements ordered from smaller to bigger.
     * @param {Any} element Element to find in the array.
     * @param {Number} start first position of the subarray where we are searching.
     * @param {Number} end last position of the subarray where we are searching (included).
     * @param {Function} isEqual Returns true if two elements are equal.
     * @param {Function} isLess Returns true if the first element is smaller than the second one.
     */
    static getElementPosition(arr, element, start, end, isEqual, isLess) {
        const mid = Math.floor((start + end) / 2);

        if (start > end) return start;
        if (isEqual(element, arr[mid])) return mid;

        if (isLess(element, arr[mid])) {
            return Utils.getElementPosition(
                arr,
                element,
                start,
                mid - 1,
                isEqual,
                isLess
            );
        }

        return Utils.getElementPosition(
            arr,
            element,
            mid + 1,
            end,
            isEqual,
            isLess
        );
    }

    /**
     * Given an array, creates a new one placing the given element in the given position.
     * Moves succesive elements one position forward if it is necessary.
     *
     * NOTE: This method uses the immutable pattern. We create a new array instead
     * of modify the existing one. Advantatges: better traceability,
     * avoid posible bugs and will improve performance if we have a reactive app.
     * Disadvantatges: creating a new array can take more time than modifying
     * an existing one.
     *
     * Cost: O(n) (n -> number of elements in the array).
     *
     * @param {Array} arr Initial array
     * @param {Any} element Element to insert.
     * @param {Number} position Where we need to insert the element.
     */
    static insertElement(arr, element, position) {
        return [...arr.slice(0, position), element, ...arr.slice(position)];
    }

    /**
     * Given an array, creates a new one without the given position element.
     * Moves succesive elements one position backward if it is necessary.
     *
     * NOTE: This method uses the immutable pattern. We create a new array instead
     * of modify the existing one. Advantatges: better traceability,
     * avoid posible bugs and will improve performance if we have a reactive app.
     * Disadvantatges: creating a new array can take more time than modifying
     * an existing one.
     *
     * Cost: O(n) (n -> number of elements in the array).
     *
     * @param {Array} arr Initial array
     * @param {Any} element Element to insert.
     * @param {Number} position Where we need to insert the element.
     */
    static removeElement(arr, position) {
        return [...arr.slice(0, position), ...arr.slice(position + 1)];
    }
}
