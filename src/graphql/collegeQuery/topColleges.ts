import { gql } from "@apollo/client";

export const getAllTopColleges = gql`
  query getAllTopColleges {
    colleges(
      filters: { isTopCollege: { eq: true } }
      sort: "topCollegeSequence:asc"
    ) {
      data {
        id
        attributes {
          slug
          breadCrumb
          collegeLogo {
            data {
              id
              attributes {
                url
              }
            }
          }
          collegeName
          description
          location {
            state {
              data {
                id
                attributes {
                  state
                }
              }
            }
            city {
              data {
                id
                attributes {
                  city
                }
              }
            }
            country {
              data {
                id
                attributes {
                  country
                }
              }
            }
          }
          college_type {
            data {
              id
              attributes {
                collegeType
              }
            }
          }
          affiliation {
            data {
              id
              attributes {
                organization
              }
            }
          }
          navbars {
            data {
              id
              attributes {
                navItem
              }
            }
          }
          courses {
            courseFee
            courseFeeLabel
            examName {
              data {
                id
                attributes {
                  examName
                }
              }
            }
          }
          estYear
          avgPackage
          hightestPackage
          topCollegeSequence
        }
      }
    }
  }
`;