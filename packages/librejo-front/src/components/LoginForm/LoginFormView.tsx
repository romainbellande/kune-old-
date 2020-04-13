import React from 'react';
import { useFormik, FormikErrors } from 'formik';
import * as Yup from 'yup';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

import useStyles from './LoginForm.styles';
import Credentials from './credentials.interface';
import { translationKeys } from 'src/i18n';

const errorHandler = <T extends {}>(formik: { errors: FormikErrors<T>; submitCount: number }) => (
  field: keyof T,
): boolean => !!formik.errors[field] && formik.submitCount > 0;

interface Props {
  onSubmit(values: Credentials): void;
  validationSchema: Yup.ObjectSchema;
  initialValues: Credentials;
}

const LoginFormView = ({ onSubmit, validationSchema, initialValues }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const getFieldError = errorHandler(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder={t(translationKeys.login.email.label)}
                error={getFieldError('email')}
                required
                fullWidth
              />
              <FormHelperText error>{formik.errors.email}</FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <Input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder={t(translationKeys.login.password.label)}
                error={getFieldError('password')}
                required
                fullWidth
              />
              <FormHelperText error>{formik.errors.password}</FormHelperText>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Box className={classes.cardActionsBox} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              {t(translationKeys.login.submit)}
            </Button>
          </Box>
        </CardActions>
      </Card>
    </form>
  );
};

export default LoginFormView;
