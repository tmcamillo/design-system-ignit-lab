import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}
export function Logo(props: LogoProps) {
  return (
    <svg
      width={96}
      height={110}
      viewBox="0 0 96 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M96 55.01c0-6.395-7.964-12.456-20.174-16.214 2.817-12.515 1.565-22.471-3.953-25.66-1.272-.747-2.76-1.101-4.383-1.101v4.388c.9 0 1.624.177 2.23.512 2.662 1.534 3.816 7.379 2.916 14.895-.215 1.85-.567 3.798-.998 5.785-3.835-.944-8.023-1.672-12.426-2.145-2.641-3.64-5.38-6.946-8.14-9.838 6.38-5.962 12.367-9.229 16.437-9.229v-4.388c-5.381 0-12.425 3.857-19.548 10.547-7.123-6.65-14.167-10.468-19.548-10.468v4.388c4.05 0 10.057 3.247 16.437 9.17a92.828 92.828 0 00-8.082 9.819c-4.422.472-8.61 1.2-12.445 2.164a59.681 59.681 0 01-1.018-5.706c-.92-7.517.216-13.361 2.857-14.916.587-.354 1.35-.511 2.25-.511v-4.388c-1.643 0-3.13.354-4.422 1.102-5.498 3.187-6.731 13.124-3.894 25.6C7.925 42.594 0 48.635 0 55.01c0 6.395 7.964 12.456 20.174 16.214-2.817 12.514-1.565 22.471 3.953 25.659 1.272.748 2.76 1.102 4.403 1.102 5.381 0 12.426-3.857 19.548-10.547 7.123 6.65 14.167 10.468 19.549 10.468 1.643 0 3.13-.354 4.422-1.102 5.498-3.188 6.731-13.125 3.894-25.6C88.075 67.446 96 61.385 96 55.01zM70.523 41.885c-.724 2.539-1.624 5.156-2.642 7.773a93.248 93.248 0 00-2.563-4.723c-.9-1.574-1.86-3.109-2.818-4.604 2.778.413 5.46.924 8.023 1.554zM61.56 62.841c-1.527 2.657-3.092 5.175-4.716 7.517-2.916.256-5.87.394-8.845.394-2.955 0-5.91-.138-8.806-.374A108.542 108.542 0 0134.46 62.9a102.736 102.736 0 01-4.07-7.831 102.802 102.802 0 014.05-7.851c1.527-2.657 3.092-5.175 4.716-7.517 2.916-.256 5.87-.394 8.845-.394 2.955 0 5.91.138 8.806.374 1.624 2.342 3.209 4.84 4.735 7.478a102.717 102.717 0 014.07 7.831 110.41 110.41 0 01-4.05 7.851zm6.32-2.558a84.652 84.652 0 012.7 7.832 87.37 87.37 0 01-8.062 1.574c.96-1.515 1.918-3.07 2.818-4.663.9-1.575 1.742-3.168 2.544-4.743zM48.039 81.28a80.97 80.97 0 01-5.44-6.297c1.761.079 3.562.138 5.381.138 1.84 0 3.66-.04 5.44-.138a76.663 76.663 0 01-5.38 6.297zm-14.558-11.59a87.845 87.845 0 01-8.023-1.554c.724-2.539 1.624-5.156 2.642-7.773a93.248 93.248 0 002.563 4.723c.92 1.574 1.859 3.109 2.818 4.604zm14.46-40.948a80.992 80.992 0 015.44 6.297A120.476 120.476 0 0048 34.9c-1.84 0-3.66.04-5.44.138a76.683 76.683 0 015.381-6.297zm-14.48 11.59a108.67 108.67 0 00-5.361 9.386 84.643 84.643 0 01-2.7-7.832 94.551 94.551 0 018.061-1.554zM15.752 64.966C8.825 61.996 4.344 58.1 4.344 55.01c0-3.09 4.481-7.005 11.408-9.957 1.683-.728 3.522-1.377 5.42-1.987 1.116 3.856 2.583 7.87 4.403 11.983-1.8 4.093-3.248 8.087-4.344 11.925a59.25 59.25 0 01-5.479-2.008zm10.528 28.12c-2.662-1.536-3.816-7.38-2.916-14.897.215-1.85.567-3.797.998-5.785 3.835.945 8.023 1.673 12.426 2.145 2.641 3.64 5.38 6.946 8.14 9.839-6.38 5.962-12.367 9.228-16.437 9.228-.88-.02-1.624-.196-2.211-.53zM72.695 78.09c.92 7.517-.216 13.36-2.857 14.915-.587.355-1.35.512-2.25.512-4.051 0-10.058-3.247-16.438-9.17a92.837 92.837 0 008.082-9.818c4.422-.473 8.61-1.2 12.445-2.165.45 1.988.802 3.896 1.018 5.726zm7.533-13.124c-1.682.728-3.522 1.377-5.42 1.987-1.115-3.857-2.583-7.871-4.403-11.983 1.8-4.093 3.248-8.088 4.344-11.925a61.834 61.834 0 015.499 2.007c6.927 2.972 11.408 6.867 11.408 9.957-.02 3.09-4.5 7.005-11.428 9.956z"
        fill="#81D8F7"
      />
      <path
        d="M47.98 64.002c4.94 0 8.943-4.026 8.943-8.992 0-4.966-4.004-8.993-8.943-8.993-4.938 0-8.942 4.026-8.942 8.993 0 4.966 4.004 8.992 8.942 8.992z"
        fill="#81D8F7"
      />
    </svg>
  )
}