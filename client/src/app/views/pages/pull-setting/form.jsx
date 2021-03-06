import React from 'react'

import { Break, Form, PrimaryButton } from 'ui/elements'
import { DescriptionText } from 'ui/typo'
import { TextArea, TextBox } from 'views/common/form'
import { validateDomain, validateUrl } from 'views/common/validate'

import CustomHeader from './custom-header'

const pullSettingForm = ({
  handleSubmit,
  idle
}) => (
  <Form handleSubmit={ handleSubmit }>
    <TextBox
      disabled={ !idle }
      label="Pull URL"
      name="pullUrl"
      validate={ validateUrl }
    />
    <DescriptionText mostLeft mostRight>
      (Optional) If you want Media CDN to request your content from a directory in your origin, enter the Pull URL here, for example, https://mywebsite.com/assets. Do not include a / at the end of the Pull URL.
    </DescriptionText>
    <Break />
    <TextArea
      disabled={ !idle }
      label="Allowed Origins"
      name="allowedOrigins"
      validate={ validateDomain }
    />
    <DescriptionText mostLeft mostRight>
      (Optional) If you want to restrict Media CDN requesting to specified origins, enter the allowed origins here.
    </DescriptionText>
    <Break />
    <CustomHeader
      idle={ idle }
      name="headers"
    />
    <DescriptionText mostLeft mostRight>
      All custom header keys and values you specify here will be included in every request to the origin.
    </DescriptionText>
    <Break double />
    <PrimaryButton
      disabled={ !idle }
      type="submit"
    >
      Save
    </PrimaryButton>
  </Form>
)

export default pullSettingForm
